import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Lastra a Signa",
});
export default withBaseProps({ 
    title: "Trasporto acqua Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"}  
});