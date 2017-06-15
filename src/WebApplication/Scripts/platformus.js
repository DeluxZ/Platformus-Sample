// Copyright © 2015 Dmitry Sikorsky. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

function getCulture() {
  if (location.href.indexOf("/ru/") != -1) {
    return "ru";
  }

  if (location.href.indexOf("/uk/") != -1) {
    return "uk";
  }

  return "en";
}