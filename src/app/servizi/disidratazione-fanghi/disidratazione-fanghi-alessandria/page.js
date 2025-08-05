import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Alessandria",
  canonical: links.servizi["disidratazione-fanghi"]["alessandria"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Alessandria",
  locationNames: { label: "Alessandria", href: "alessandria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["alessandria"],
      name: "Alessandria",
  }),
});
