import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Belluno",
  canonical: links.servizi["disidratazione-fanghi"]["belluno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Belluno",
  locationNames: { label: "Belluno", href: "belluno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["belluno"],
      name: "Belluno",
  }),
});
