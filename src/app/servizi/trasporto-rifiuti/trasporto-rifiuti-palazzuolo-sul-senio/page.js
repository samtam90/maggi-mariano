import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Palazzuolo sul Senio",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"}  
});