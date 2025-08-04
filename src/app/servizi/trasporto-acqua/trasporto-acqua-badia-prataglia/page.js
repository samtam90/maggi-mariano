import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Badia Prataglia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"}  
});