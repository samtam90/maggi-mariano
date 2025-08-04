import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Bari",
});
export default withBaseProps({ 
    title: "Trasporto acqua Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});