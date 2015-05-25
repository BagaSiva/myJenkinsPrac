package org.tektutor;

import static org.junit.Assert.*;
import org.junit.Test;

public class TestHello {

   @Test
   public void testSayHello(){
      
      Hello objHello = new Hello();
      String strExpectedValue = "Hello Welcome to Jenkins Training";
      String strActualValue = objHello.sayHello();
      System.out.println("strActualValue :::"+strActualValue); 
      assertEquals(strExpectedValue, strActualValue);
   
   }

}
