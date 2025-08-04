import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Palazzuolo sul Senio",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Palazzuolo sul Senio", 
  locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"} 
});
