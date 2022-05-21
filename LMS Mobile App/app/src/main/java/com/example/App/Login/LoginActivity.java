package com.example.App.Login;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.App.Login.model.Model;
import com.example.App.Login.model.User;
import com.example.App.Login.model.api.AbstractAPIListener;
import com.example.App.MainPackage.MainActivity;
import com.example.App.R;

public class LoginActivity extends AppCompatActivity {

    private Button LoginBtn1;
    private Button registerBtn;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        EditText emailField=findViewById(R.id.emailText);
        EditText passwordField=findViewById(R.id.passwordText);
        Button loginBtn=findViewById(R.id.loginBtn1);

        LoginBtn1 =findViewById(R.id.loginBtn1);
        LoginBtn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(LoginActivity.this,"Successfully login!",Toast.LENGTH_LONG).show();
                Intent intent=new Intent(LoginActivity.this,MainActivity.class);
                startActivity(intent);
            }



        });

        registerBtn = findViewById(R.id.registerBtn);
        registerBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
                startActivity(intent);
            }
        });

    }
}