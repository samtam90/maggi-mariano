import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Talla",
  canonical: links.servizi["disidratazione-fanghi"]["talla"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Talla",
  locationNames: { label: "Talla", href: "talla" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
