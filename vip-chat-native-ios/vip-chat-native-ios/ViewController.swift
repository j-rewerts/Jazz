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

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        title = "jazz"
        LiveChat.presentChat()
    }
    
    @IBAction func openChat(_ sender: Any) {
        LiveChat.presentChat()
    }
}

