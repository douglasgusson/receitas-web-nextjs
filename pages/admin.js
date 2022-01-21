export async function getServerSideProps(context) {
  const projectID = process.env.GRAPHCMS_PROJECT_ID || "";
  const contentUrl = `https://app.graphcms.com/${projectID}/master/content/`;

  return {
    redirect: {
      destination: contentUrl,
      permanent: false,
    },
  };
}

const Admin = () => <div />;

export default Admin;
