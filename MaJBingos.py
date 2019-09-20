#!/usr/bin/env python3
# encoding: utf-8
# author: Aerdalis <aerdalisc(at)hotmail(dot)fr>
# Copyleft (ↄ) 2019
#
# Tool generating updated bingos from main scripts


import os
# logging tools lib
import logging

from pathlib import Path
import copy

# regular expressions
import re

# 
# Program main class
# 
class MaJBingos(object):
	logger=None
	main_path=None
	main_file=None
	corpus_path=None
	output_path=None
	corpus=None
	stat_array=None
	main_code=None
	
	def __init__(self):
		"""Initialise class related properties:
		* configure and set up the logger
		* initiate vars
		
		Parameters
		----------
		
		None
		"""
		# set up logger
		self.logger = logging.getLogger("MaJBingos")
		self.logger.setLevel(logging.INFO)
		ch = logging.StreamHandler()
		ch.setLevel(logging.INFO)
		formatter = logging.Formatter('%(asctime)s - %(name)s %(funcName)s - %(levelname)s - %(message)s')
		ch.setFormatter(formatter)
		self.logger.addHandler(ch)
		# init vars
		self.main_path=Path(".")
		self.corpus_path=Path("./content")
		self.output_path=Path("./bingos")
		return
		
	def load_files(self):
		"""Load generic code and prepare it for the merge
		
		Parameters
		----------
		
		None
		"""
		# load main file
		new_grid_code_f = self.main_file.open('r', encoding="utf-8")
		new_grid_code = new_grid_code_f.read()
		# remove import
		new_grid_code = re.sub(r"<script type=\"application/javascript\" src=\"contenu.js\"></script>	<!-- change here to load specific bingo configuration -->","", new_grid_code, count=1)
		self.main_code = new_grid_code
		return
		
	def generate_grid(self, corpus):
		"""Generate grid from main script and specific content file
		Load content
		Add to generic code
		save grid code
		
		Parameters
		----------
		:param corpus: id of the bingo grid
		:type string
		"""
		grid_content_path = Path(self.corpus_path, corpus+".js")
		new_grid_content_f = grid_content_path.open('r', encoding="utf-8")
		new_grid_content = new_grid_content_f.read()
		#copy shared code
		code = copy.copy(self.main_code)
		# add content
		cdata_match = re.search(r"//<!\[CDATA\[", self.main_code)
		new_grid_code = code[:cdata_match.end()] + "\n" + new_grid_content + code[cdata_match.end():]
		grid_output_path = Path(self.output_path, "bingo_"+corpus+".html")
		# write merge code
		with grid_output_path.open('w', encoding='utf-8') as output_csv:
			output_csv.write(new_grid_code)
		return
		
	def generate(self, corpus):
		"""Start generation of the grids in the corpus
		
		Parameters
		----------
		:param corpus: IDs (names) of the files to process
		:type corpus: Array of string
		"""
		self.corpus = corpus
		self.main_file = Path(self.main_path, "bingo.html")
		self.load_files()
		# generate all grids
		for grid in self.corpus:
			self.generate_grid(grid)
		return
		
# main function (merge)
if __name__ == "__main__":
	# configure processing
	corpus = ["boulet_dessin", "stream_CPC"]
	# generic configuration
	mb = MaJBingos()
	# generation of the grids
	mb.generate(corpus)



