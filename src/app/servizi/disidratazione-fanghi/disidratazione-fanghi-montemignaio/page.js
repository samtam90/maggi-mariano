import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montemignaio",
  canonical: links.servizi["disidratazione-fanghi"]["montemignaio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montemignaio",
  locationNames: { label: "Montemignaio", href: "montemignaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
