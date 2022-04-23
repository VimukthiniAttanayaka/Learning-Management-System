package com.example.listviewdashboard;

import androidx.appcompat.app.AppCompatActivity;


import android.os.Bundle;
import android.widget.ImageView;
import androidx.appcompat.widget.Toolbar;

public class SecondActivity extends AppCompatActivity {

    Toolbar mToolbar;
    ImageView img;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        mToolbar=(Toolbar)findViewById(R.id.toolbar1);

        Bundle bundle = getIntent().getExtras();
        mToolbar.setTitle(bundle.getString("CourseName"));


    }
}