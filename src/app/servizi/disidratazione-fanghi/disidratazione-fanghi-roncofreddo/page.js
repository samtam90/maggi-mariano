import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Roncofreddo",
  canonical: links.servizi["disidratazione-fanghi"]["roncofreddo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Roncofreddo",
  locationNames: { label: "Roncofreddo", href: "roncofreddo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
