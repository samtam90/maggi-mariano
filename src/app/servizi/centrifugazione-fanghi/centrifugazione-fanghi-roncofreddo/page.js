import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Roncofreddo",
  canonical: links.servizi["centrifugazione-fanghi"]["roncofreddo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Roncofreddo",
  locationNames: { label: "Roncofreddo", href: "roncofreddo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
