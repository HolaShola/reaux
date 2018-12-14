import unittest
import requests
# from tagcounter import tag_counter
import tagcounter
from requests import Response
from unittest.mock import MagicMock
from bs4 import BeautifulSoup

class TagcounterTestCase(unittest.TestCase):
    def test_tagcounter(self):
        response = Response()
        tagcounter.requests.get = MagicMock(return_value={"text": "<div>123</div>"})
        tagcounter.BeautifulSoup = MagicMock(return_value=3)
        result = tagcounter.tag_counter("")
        self.assertEqual(result, {"div": 1})

unittest.main()
