import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Taranto",
  canonical: links.servizi["disidratazione-fanghi"]["taranto"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Taranto",
  locationNames: { label: "Taranto", href: "taranto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["taranto"],
      name: "Taranto",
  }),
});
