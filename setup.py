from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in a2z_designs/__init__.py
from a2z_designs import __version__ as version

setup(
	name="a2z_designs",
	version=version,
	description="New Design for a2z",
	author="a2z",
	author_email="info@a2z.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
