class Solution:
    def longestPalindrome(self, s: str) -> int:
        ans = 0;
        for charValue in collections.Counter(s).values():
            ans += charValue // 2 * 2
            if ans % 2 == 0 and charValue % 2 == 1:
                ans += 1
        return ans
        
