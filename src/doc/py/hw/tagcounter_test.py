import unittest
import requests
from tagcounter import main
from unittest.mock import MagicMock
from bs4 import BeautifulSoup

class TagcounterTestCase(unittest.TestCase):
    def test_tagcounter(self):
        requests.get = MagicMock(return_value={"text": "<div>123</div>"})
        rez = main()
        self.assertEqual(rez, 3)

unittest.main()