import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Viterbo",
  canonical: links.servizi["trasporto-rifiuti"]["viterbo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["viterbo"],
      name: "Viterbo",
  }),
});
