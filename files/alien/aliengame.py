# Matthew Keitelman (mak2vr)
# Fernando Mata Cordero (fm5ew)

import pygame
import gamebox

camera = gamebox.Camera(1000,800,True)
alien = gamebox.from_image(150, 10, "alien.png")
alien.scale_by(1.4)
alien.yspeed = 0

levels = gamebox.from_image(400,400,"levels.png")
levels.scale_by(1.5)

blue_hole_sheet = gamebox.

platforms = [
    # gamebox.from_color(-100, 600, "black", 3000, 100),
    levels
    # ground1
]

def tick(keys):

    # GRAVITY
    alien.yspeed += 1
    alien.y = alien.y + alien.yspeed

    if pygame.K_s in keys:
        alien.image = "alien_top.png"
    elif pygame.K_d in keys:
        alien.image = "alien_middle.png"
    elif pygame.K_f in keys:
        alien.image = "alien_bottom.png"
    else:
        alien.image = "alien.png"

    for platform in platforms:
        if alien.touches(platform):
            alien.move_to_stop_overlapping(platform)

    if pygame.K_RIGHT in keys:
        alien.x += 5
    if pygame.K_LEFT in keys:
        alien.x -= 5
    camera.clear("cyan")
    camera.draw(alien)
    for platform in platforms:
        camera.draw(platform)
    camera.display()
ticks_per_second = 30

# keep this line the last one in your program
gamebox.timer_loop(ticks_per_second, tick)
