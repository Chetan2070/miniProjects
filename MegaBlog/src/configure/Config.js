const Configure = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_Project_Id),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_Collection_Id),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_Bucket_Id),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_Database_Id),

}

export default Configure