import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NgFor, 
    NgIf, 
    RouterModule, 
    CommonModule, 
    FormsModule, 
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'Jeffry Portfolio';
  isScrolled = false;
  isChatOpen = false;
  userInput = '';
  messages: { text: string; sender: string }[] = [];

  @ViewChild('chatBody') chatBody!: ElementRef; // ✅ Reference the chat body for auto-scroll

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isChatOpen = true;
    setTimeout(() => this.scrollToBottom(), 100); // Auto-scroll after opening

    // Auto-send a welcome message
    this.messages.push({ text: "👋 Hi there! How can I assist you today?", sender: 'ai' });
  }

  ngAfterViewInit() {
    this.scrollToBottom(); // ✅ Ensure chat is scrolled on load
  }

  // ✅ Toggle AI Chat Box & Auto-Scroll
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      setTimeout(() => this.scrollToBottom(), 100); // ✅ Scroll to bottom when opening chat
    }
  }

  // ✅ Send User Message to AI API & Auto-Scroll
  sendMessage() {
    if (!this.userInput.trim()) return;
  
    // Add User Message to Chat
    this.messages.push({ text: this.userInput, sender: 'user' });
  
    // Prepare payload { "question": "user message" }
    const payload = { question: this.userInput };
  
    // Call FastAPI Backend
    this.http.post<any>('https://python-ai-wdey.onrender.com/ask', payload).subscribe({
      next: (response) => {
        this.messages = this.messages.filter(msg => msg.text !== "🤖 Thinking...");
        const aiReply = response.response || "⚠️ AI did not provide a response.";
        this.messages.push({ text: aiReply, sender: 'ai' });
        setTimeout(() => this.scrollToBottom(), 100); // ✅ Auto-scroll after AI response
      },
      error: (error) => {
        console.error('Error fetching AI response:', error);
        this.messages.push({ text: "⚠️ AI is currently unavailable. Try again later.", sender: 'ai' });
        setTimeout(() => this.scrollToBottom(), 100); // ✅ Auto-scroll on error message
      }
    });

    // Clear Input Field
    this.userInput = '';

    // Auto-scroll to bottom
    setTimeout(() => this.scrollToBottom(), 100);
  }

  // ✅ Scroll to the Last Message
  scrollToBottom() {
    if (this.chatBody) {
      setTimeout(() => {
        this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
      }, 50);
    }
  }

  // ✅ Smooth Scrolling for Sections
  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  // ✅ Detect Scroll & Change Navbar Background
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // ✅ Close Navbar on Click
  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar) {
      navbar.classList.remove('show');
    }
  }
}
