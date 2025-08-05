import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Caprese Michelangelo",
  canonical: links.servizi["disidratazione-fanghi"]["caprese-michelangelo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Caprese Michelangelo",
  locationNames: { label: "Caprese Michelangelo", href: "caprese-michelangelo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
