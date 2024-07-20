import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { MainComponent } from './app/main/main.component';

bootstrapApplication(MainComponent).catch((err) => console.error(err));
