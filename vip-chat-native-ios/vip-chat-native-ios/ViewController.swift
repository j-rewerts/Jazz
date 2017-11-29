//
//  ViewController.swift
//  vip-chat-native-ios
//
//  Created by Jared Rewerts on 11/28/17.
//  Copyright © 2017 City of Edmonton. All rights reserved.
//

import UIKit
import LiveChat
import MapKit
import GoogleSignIn

class ViewController: UIViewController, GIDSignInUIDelegate {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        GIDSignIn.sharedInstance().uiDelegate = self
        GIDSignIn.sharedInstance().signIn()
    }
}

