import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Caltanissetta",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"}  
});