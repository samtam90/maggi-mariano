import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Bologna",
});
export default withBaseProps({ 
    title: "Trasporto acqua Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});