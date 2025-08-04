import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Bagno a Ripoli",
});
export default withBaseProps({ 
    title: "Trasporto acqua Bagno a Ripoli", 
    locationNames: {label: "Bagno a Ripoli", href: "bagno-a-ripoli"}  
});