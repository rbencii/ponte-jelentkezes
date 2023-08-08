package hu.ponte.hr.services;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.RSAPublicKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Objects;

@Service
public class SignService {

    private PrivateKey getPrivateKey() throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        try {
            byte[] _pkey = Objects.requireNonNull(getClass().getResourceAsStream("/config/keys/key.private")).readAllBytes();
            PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(_pkey);
            KeyFactory kf = KeyFactory.getInstance("RSA");

            return kf.generatePrivate(spec);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    private PublicKey getPublicKey() throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        try {
            byte[] _pkey = Objects.requireNonNull(getClass().getResourceAsStream("/config/keys/key.pub")).readAllBytes();
            X509EncodedKeySpec spec = new X509EncodedKeySpec(_pkey);
            KeyFactory kf = KeyFactory.getInstance("RSA");

            return kf.generatePublic(spec);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public String signFile(MultipartFile file) throws Exception {

        Signature privateSignature = Signature.getInstance("SHA256withRSA");
        privateSignature.initSign(getPrivateKey());
        privateSignature.update(file.getBytes());
        byte[] signature = privateSignature.sign();
        byte[] _arr = Base64.encodeBase64(signature);

        return new String(_arr);
    }

    public Boolean verify(MultipartFile file, String b64) throws Exception {

        byte[] signature = Base64.decodeBase64(b64);
        Signature publicSignature = Signature.getInstance("SHA256withRSA");
        publicSignature.initVerify(getPublicKey());
        publicSignature.update(file.getBytes());

        return publicSignature.verify(signature);
    }

}
