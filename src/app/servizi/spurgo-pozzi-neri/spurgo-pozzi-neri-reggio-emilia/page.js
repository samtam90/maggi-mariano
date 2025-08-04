import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Reggio Emilia",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});