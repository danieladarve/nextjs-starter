import styled from "styled-components";
import tw from "twin.macro";

const { screens } = require("../../tailwind.config.js").theme;

const MainContainer = styled.main`
  &.default-layout {
    .body-layout {
      ${tw`-mt-20 mb-30 pb-20 relative`}
    }
    header {
      ${tw`pb-15`}
    }
  }
  &.home-layout {
    .body-layout {
      ${tw`pb-30`}
    }
  }
  .header-padding {
    ${tw`px-4`}
  }
  section.default-layout {
    ${tw`ml-4`}
    article .padding-default {
      ${tw`pl-4 pr-8`}
    }
  }
  section .padding-home {
    ${tw`px-4`}
  }

  @media (min-width: ${screens.sm}) {
    .header-padding,
    footer {
      ${tw`px-8`}
    }
    section.default-layout {
      ${tw`ml-8`}
      article .padding-default {
        ${tw`pl-8 pr-8`}
      }
    }
    section .padding-home {
      ${tw`px-8`}
    }
  }
  @media (min-width: ${screens.md}) {
    .header-padding,
    footer {
      ${tw`px-12`}
    }
    section.default-layout {
      ${tw`ml-12`}
    }
    section .padding-home {
      ${tw`px-12`}
    }
  }
  @media (min-width: ${screens.lg}) {
    .header-padding,
    footer {
      ${tw`px-16`}
    }
    section.default-layout {
      ${tw`ml-16`}
      article .padding-default {
        ${tw`pr-15`}
      }
    }
    section .padding-home {
      ${tw`px-16`}
    }
  }
  @media (min-width: ${screens.xl}) {
    .header-padding,
    footer {
      ${tw`px-20`}
    }
    section.default-layout {
      ${tw`ml-20`}
      article .padding-default {
        ${tw`pr-18`}
      }
    }
    section .padding-home {
      ${tw`px-20`}
    }
  }
  @media (min-width: ${screens["2xl"]}) {
    .header-padding,
    footer {
      ${tw`px-30`}
    }
    section.default-layout {
      ${tw`ml-30`}
      article .padding-default {
        ${tw`pr-32`}
      }
    }
    section .padding-home {
      ${tw`px-30`}
    }
  }
`;

export default MainContainer;
