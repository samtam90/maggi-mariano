import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montelupo Fiorentino",
  canonical: links.servizi["pulizia-fognature"]["montelupo-fiorentino"],
});
export default withBaseProps({
  title: "Pulizia fognature Montelupo Fiorentino",
  locationNames: { label: "Montelupo Fiorentino", href: "montelupo-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
