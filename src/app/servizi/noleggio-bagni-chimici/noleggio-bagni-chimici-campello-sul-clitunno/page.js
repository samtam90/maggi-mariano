import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Campello sul Clitunno",
  canonical: links.servizi["noleggio-bagni-chimici"]["campello-sul-clitunno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Campello sul Clitunno", 
  locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"} 
});
