import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cuneo",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"}  
});