    
    let res=constructTree(preorder,0,preorder.length-1)
    return res
    
​
    function constructTree(preorder,start,end){
        
        if( start>end)
            return null
    
        let root=new TreeNode(preorder[curr++])
          if(start==end){
            return root;
        }
        let index=inmap[root.val]
        root.left=constructTree(preorder,start,index-1)
        root.right=constructTree(preorder,index+1,end)
                             
        return root 
    }
    
    
};
​
​
// class Solution {
// static int ind=0;
// HashMap<Integer,Integer> map;
// public TreeNode buildTree(int[] preorder, int[] inorder) {
// ind=0;
