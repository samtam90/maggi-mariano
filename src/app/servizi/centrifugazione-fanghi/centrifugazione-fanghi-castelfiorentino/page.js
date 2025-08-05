import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Castelfiorentino",
  canonical: links.servizi["centrifugazione-fanghi"]["castelfiorentino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Castelfiorentino",
  locationNames: { label: "Castelfiorentino", href: "castelfiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
