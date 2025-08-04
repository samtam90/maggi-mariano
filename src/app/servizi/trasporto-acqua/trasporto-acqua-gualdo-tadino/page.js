import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Gualdo Tadino",
});
export default withBaseProps({ 
    title: "Trasporto acqua Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});