import { Component, ViewChild, ElementRef } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgIf, NgFor } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  title = "angular_2025";
  text1 = "Hey there! I’m Jeffry";
  text2 = "Turning Ideas into High-Performance Applications";
  typingSpeed = 100;
  @ViewChild("videoPlayer", { static: false }) videoPlayer!: ElementRef;

  videos = [
    { src: "assets/play.mp4" },
    { src: "assets/play.mp4" },
    { src: "assets/play.mp4" },
  ];

  currentVideoIndex = 0;
  isPaused = false;

  ngAfterViewInit() {
    this.updateVideoSource();
    this.typeText("text-line-1", this.text1, 0, () => {
      setTimeout(() => {
        this.typeText("text-line-2", this.text2, 0);
      }, 500);
    });
  }

  togglePlayPause() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
      this.isPaused = false;
    } else {
      video.pause();
      this.isPaused = true;
    }
  }

  setVideo(index: number) {
    this.currentVideoIndex = index;
    this.updateVideoSource();
  }

  updateVideoSource() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.src = this.videos[this.currentVideoIndex].src;
    video.load();
    video.play();
  }
  typeText(
    elementId: string,
    text: string,
    index: number,
    callback?: () => void
  ) {
    if (index < text.length) {
      document.getElementById(elementId)!.innerHTML += text.charAt(index);
      setTimeout(
        () => this.typeText(elementId, text, index + 1, callback),
        this.typingSpeed
      );
    } else if (callback) {
      callback();
    }
  }
}
