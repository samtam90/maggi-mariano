import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Viterbo",
  canonical: links.servizi["pulizia-fognature"]["viterbo"],
});
export default withBaseProps({
  title: "Pulizia fognature Viterbo",
  locationNames: { label: "Viterbo", href: "viterbo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["viterbo"],
      name: "Viterbo",
  }),
});
