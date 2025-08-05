import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Macerata",
  canonical: links.servizi["disidratazione-fanghi"]["macerata"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Macerata",
  locationNames: { label: "Macerata", href: "macerata" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["macerata"],
      name: "Macerata",
  }),
});
