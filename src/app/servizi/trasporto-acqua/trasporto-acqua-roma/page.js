import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Roma",
});
export default withBaseProps({ 
    title: "Trasporto acqua Roma", 
    locationNames: {label: "Roma", href: "roma"}  
});