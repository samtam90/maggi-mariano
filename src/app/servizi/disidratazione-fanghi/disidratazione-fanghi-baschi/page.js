import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Baschi",
  canonical: links.servizi["disidratazione-fanghi"]["baschi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Baschi",
  locationNames: { label: "Baschi", href: "baschi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
