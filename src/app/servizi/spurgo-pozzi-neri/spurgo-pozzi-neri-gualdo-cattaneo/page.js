import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gualdo Cattaneo",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});