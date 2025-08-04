import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Deruta",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Deruta", 
    locationNames: {label: "Deruta", href: "deruta"}  
});