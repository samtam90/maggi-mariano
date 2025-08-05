import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Carbonia Iglesias",
  canonical: links.servizi["pulizia-fognature"]["carbonia-iglesias"],
});
export default withBaseProps({
  title: "Pulizia fognature Carbonia Iglesias",
  locationNames: { label: "Carbonia Iglesias", href: "carbonia-iglesias" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["carbonia-iglesias"],
      name: "Carbonia Iglesias",
  }),
});
