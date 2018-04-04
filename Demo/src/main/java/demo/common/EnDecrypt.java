package demo.common;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.digest.DigestUtils;

public class EnDecrypt {
    
    public EnDecrypt() {
        
    }
    
    public String asHex(byte buf[]) {
        StringBuffer strbuf = new StringBuffer(buf.length * 2);
        
        int i;
        
        for (i = 0; i < buf.length; i++) {
            if ((buf[i] & 0xff) < 0x10)
                strbuf.append("0");
                
            strbuf.append(Long.toString(buf[i] & 0xff, 16));
        }
        
        return strbuf.toString();
    }
    
    public byte[] asBytes(String digits) {
        if (digits == null) {
            return null;
        }
        
        int divLen = 2;
        int length = digits.length();
        
        if (length % divLen == 1) {
            return null;
        }
        
        length = length / divLen;
        
        byte[] bytes = new byte[length];
        
        for (int i = 0; i < length; i++) {
            int index = i * divLen;
            
            bytes[i] = (byte)(Short.parseShort(digits.substring(index, index+divLen), 16));
        }
        
        return bytes;
    }    

    public SecretKeySpec getSecretKey(){
        byte [] key = new byte[16];
        
        key[0] = 0x21;
        key[1] = 0x4C;
        key[2] = 0x47;
        key[3] = 0x57;
        key[4] = 0x6F;
        key[5] = 0x72;
        key[6] = 0x6C;
        key[7] = 0x64;
        key[8] = 0x42;
        key[9] = 0x69;
        key[10] = 0x6C;
        key[11] = 0x6C;
        key[12] = 0x69;
        key[13] = 0x6E;
        key[14] = 0x67;
        key[15] = 0x24;
        
        return new SecretKeySpec(key, "AES");
    }
    
    public String EncryptAES(String strPlainText) {
        try{
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.ENCRYPT_MODE, getSecretKey());
            
            byte[] encrypted = cipher.doFinal( strPlainText.getBytes() );
            
            return asHex(encrypted);
        } catch(Exception e) {
            e.printStackTrace();
            
            return null;
        }
    }
    
    public String DecryptAES(String strEncText) {
        try{
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.DECRYPT_MODE, getSecretKey());
            
            byte[] decrypted = cipher.doFinal( asBytes(strEncText) );
            return new String(decrypted);
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    
    /**
     * sha512 암호화
     * @param plain text
     * @return encrypt
     */
    public static String EncryptSHA512(String strPlainText){
        String strEncrypt = DigestUtils.sha512Hex(strPlainText);
        
        return strEncrypt;
    }
}