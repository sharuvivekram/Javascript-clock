# Chrono — JavaScript Clock

A clean analog and digital clock built with plain HTML, CSS, and JavaScript. It features a sweeping second hand, a live digital readout with AM/PM, and the current date. No frameworks, no dependencies — just open it and it runs.

## Features

- Analog clock face with hour, minute, and smoothly animated second hands
- Digital time display with 12-hour format and AM/PM
- Live date (day of week, month, and date)
- Self-contained in a single `index.html` file
- Ships with a `Dockerfile` so it can run in a container

## Tech Used

- HTML
- CSS (custom properties, animations)
- Vanilla JavaScript (`requestAnimationFrame` for smooth motion)
- Docker + nginx (optional, for containerized serving)

## Running It Locally

The simplest way — no tools needed:

1. Clone the repository:
   ```bash
   git clone https://github.com/sharuvivekram/Javascript-clock.git
   cd Javascript-clock
   ```
2. Open `index.html` in any web browser (double-click it, or drag it into a browser window).

That's it — the clock starts immediately.

## Running It with Docker

If you have Docker installed, you can serve the clock from a container:

1. Build the image:
   ```bash
   docker build -t my-clock .
   ```
2. Run it:
   ```bash
   docker run -d -p 8080:80 my-clock
   ```
3. Open your browser to [http://localhost:8080](http://localhost:8080)

To stop the container, find its ID with `docker ps`, then run `docker stop <container-id>`.

## Project Structure

```
Javascript-clock/
├── index.html      # The full clock (markup, styles, and script)
├── Dockerfile      # Builds an nginx image that serves the clock
└── README.md       # This file
```

## How It Works

The clock reads the current time on every animation frame and rotates each hand by the right number of degrees: the second hand moves 6° per second, the minute hand 6° per minute, and the hour hand 30° per hour (plus a little extra so it drifts gradually between numbers). The digital readout and date are formatted from the same `Date` object.

## License

Free to use and modify for learning and personal projects.


