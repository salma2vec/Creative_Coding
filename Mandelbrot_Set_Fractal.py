import numpy as np
import matplotlib.pyplot as plt

def countIterationsUntilDivergent(c, threshold):
    z = complex(0, 0)
    for iteration in xrange(threshold):
        z = (z*z) + c

        if abs(z) > 4:
            break
            pass
        pass
    return iteration

def mandelbrot(threshold, density):
    realAxis = np.linspace(-0.22, -0.219, 1000)
    imaginaryAxis = np.linspace(-0.70, -0.699, 1000)
    realAxisLen = len(realAxis)
    imaginaryAxisLen = len(imaginaryAxis)

    # A 2-D Array to represent the Mandelbrot
    atlas = np.empty((realAxisLen, imaginaryAxisLen))

    # Color each point in the atlas depending on the iteration count
    for ix in xrange(realAxisLen):
        for iy in xrange(imaginaryAxisLen):
            cx = realAxis[ix]
            cy = imaginaryAxis[iy]
            c = complex(cx, cy)

            atlas[ix, iy] = countIterationsUntilDivergent(c, threshold)
            pass
        pass

    # Plot and Display the Mandelbrot Set
    plt.imshow(atlas.T, interpolation="nearest")
    plt.show()

mandelbrot(120, 1000)
